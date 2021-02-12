import csv
import os
import requests
import category_encoders 
import pickle
import pandas as pd

def fgender(x):
    if x=='M':
        return 0
    return 1
   
def fexpired(x):
    if x=='Yes':
        return 1
    return 0
    
def fao_Cr(x):
    if x in ['CLINIC REFERRAL', 'CLINIC REFERAL', 'CLINIC', 'FROM CLINIC', 'CLINIC  REFERRAL', 'CINIC REFERRAL']:
        return 1
    return 0

def fao_era(x):
    if x in ['EMERGENCY ROOM ADMISSION', 'ADMITTED FROM EMERGENCY', 'ER ADMISSION', 'ADMITTED FRIM EMERGENCY', 'EMERGENCY ROOM ADMIT', 'ER ADMIT', 'EMERG. ROOM ADMISSION']:
        return 1
    return 0

def fao_pr(x):
    if x in ['PHYSICAL REFERRAL', 'PHYS REFERRAL', 'PHYSICAL  REFERRAL', 'PHYSICAL   REFERRAL']:
        return 1
    return 0

def freligion_cath(x):
    if x=='CATHOLIC':
        return 1
    return 0

def freligion_nav(x):
    if x in ['NOT AVAILIABLE RELIGION','NOT SPECIFIED','UNOBTAINABLE']:
        return 1
    return 0

def freligion_or(x):
    if x in ['OTHER', 'EPISCOPALIAN', 'STAN', 'GREEK ORTHODOX',
       'CHRISTIAN SCIENTIST', 'SCIENTOLOGY', 'BUDDHIST', 'MUSLIM',
       "JEHOVAH'S WITNESS", 'UNITARIAN-UNIVERSALIST', 'HINDU',
       'ROMANIAN EAST. ORTH', '7TH DAY ADVENTIST', 'BAPTIST', 'HEBREW',
       'METHODIST']:
        return 1
    return 0

def freligion_pq(x):
    if x=='PROTESTANT QUAKER':
        return 1
    return 0

def fethnicity_c(x):
    if x=='CAUCASIAN':
        return 1
    return 0

def fethnicity_oe(x):
    if x in ['GUERO', 'HISPANIC OR LATINO', 'OTHER', 'ASIAN', 'UNK',
       'ASIAN - CHINESE', 'CAUCATIAN', 'HISPANIC/LATINO - PUERTO RICAN',
       'BLACK/CAPE VERDEAN', 'WHITE - RUSSIAN', 'MULTI RACE ETHNICITY',
       'BLACK/HAITIAN', 'ASIAN - ASIAN INDIAN', 'WHITE - OTHER EUROPEAN',
       'HISPANIC/LATINO - DOMINICAN', 'WHITE - BRAZILIAN', 'PORTUGUESE',
       'ASIAN - VIETNAMESE', 'AMERICAN INDIAN/ALASKA NATIVE', 'MIDDLE EASTERN',
       'BLACK/AFRICAN', 'HISPANIC/LATINO - GUATEMALAN',
       'WHITE - EASTERN EUROPEAN', 'ASIAN - FILIPINO',
       'HISPANIC/LATINO - CUBAN', 'HISPANIC/LATINO - SALVADORAN',
       'ASIAN - CAMBODIAN', 'HISPANIC/LATINO - CENTRAL AMERICAN (OTHER)',
       'ASIAN - OTHER', 'NATIVE HAWAIIAN OR OTHER PACIFIC ISLANDER',
       'HISPANIC/LATINO - MEXICAN', 'HISPANIC/LATINO - COLOMBIAN',
       'ASIAN - KOREAN', 'CARIBBEAN ISLAND', 'ASIAN - JAPANESE',
       'SOUTH AMERICAN', 'HISPANIC/LATINO - HONDURAN',
       'AMERICAN INDIAN/ALASKA NATIVE FEDERALLY RECOGNIZED TRIBE',
       'ASIAN - THAI']:
        return 1
    return 0

def fethnicity_w(x):
    if x=='WHITE':
        return 1
    return 0

def fmarital_m(x):
    if x=='MARRIED':
        return 1
    elif x=='LIFE PARTNER':
        return 1
    return 0

def fmarital_s(x):
    if x=='SINGLE':
        return 1
    return 0

def finsurance_m(x):
    if x=='Medicare':
        return 1
    return 0

def finsurance_p(x):
    if x=='Private':
        return 1
    return 0

def fadmtype(x):
    if x=='EMERGENCY':
        return 1
    return 0

def fnum_callouts(x):
    if x>2:
        return 0
    return x

def fnum_diagnosis(x):
    if x>7:
        return 1
    return x

def fnum_procedures(x):
    if x>2:
        return 0
    return x

def fnum_cptevents(x):
    if x>3:
        return 1
    return x

def fnum_input(x):
    if x>77.5:
        return 14
    return x

def fnum_labevents(x):
    if x>87:
        return 39
    return x

def fnum_microbio(x):
    if x>4:
        return 1
    return x

def fnote_events(x):
    if x>5:
        return 0
    return x

def fout_events(x):
    if x>20:
        return 5
    return x

def fnum_procedure_events(x):
    if x>3:
        return 0
    return x

def fnum_transfers(x):
    if x>2:
        return 1
    return x

def fnum_charteve(x):
    if x>1437:
        return 418
    return x

def fcount_diagno(x):
    x=x.replace(',',';')
    x=x.replace('\\',';')
    x=x.replace('/',';')
    x=x.strip()
    return len(x.split(';'))

def fadmission_diagno(diagnosis,hash_file):
    diagnosis=diagnosis.replace(',',';')
    diagnosis=diagnosis.replace('\\',';')
    diagnosis=diagnosis.replace('/',';')
    diagnosis=diagnosis.strip()
    df_admin_diag=pd.DataFrame({'admission_diagnosis':[diagnosis]})
    loaded_hash = pickle.load(open(hash_file, 'rb'))
    result = loaded_hash.transform(df_admin_diag)
    result.columns = ['admission_diagnosis_hash_0', 'admission_diagnosis_hash_1', 'admission_diagnosis_hash_2', 'admission_diagnosis_hash_3', 'admission_diagnosis_hash_4']
    return result

