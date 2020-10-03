import csv
import os
from services.prepro_service import fcount_diagno,fgender,fnum_callouts,fnum_diagnosis,fnum_procedures,fnum_cptevents,fnum_input,fnum_labevents,fnum_microbio,fnote_events,fout_events,fnum_procedure_events, fnum_transfers,fnum_charteve,fexpired,fadmtype,fadmission_diagno,freligion_cath,freligion_nav,freligion_or,freligion_pq,fmarital_m,fmarital_s,fethnicity_c,fethnicity_oe,fethnicity_w,fao_Cr,fao_era,fao_pr,finsurance_m,finsurance_p
import pandas as pd
from services.ml_service import scaling_data, cat_model


def save(patient):

    required_patient_keys = {'gender', 'age', 'num_callouts', 'num_diagnoses', 'num_procedures','num_cptevents', 'num_inputevents', 'num_labevents',
       'num_microbiologyevents', 'num_noteevents', 'num_outputevents','num_procedureevents', 'num_transfers', 'num_chartevents', 'expired',
       'admission_type','admission_diagnosis', 'insurance','religion', 'marital_status', 'ethnicity','admission_origin'}
    if not all(key in patient for key in required_patient_keys):
        return None

    
    new_patient = {
        "gender": fgender(patient['gender']),
        "age": patient["age"],
        "num_callouts": fnum_callouts(patient["num_callouts"]),
        "num_diagnoses": fnum_diagnosis(patient["num_diagnoses"]),
        "num_procedures": fnum_procedures(patient["num_procedures"]),
        "num_cptevents": fnum_cptevents(patient["num_cptevents"]),
        "num_inputevents": fnum_input(patient["num_inputevents"]),
        "num_labevents": fnum_labevents(patient["num_labevents"]),
        "num_microbiologyevents": fnum_microbio(patient["num_microbiologyevents"]),
        "num_noteevents": fnote_events(patient["num_noteevents"]),
        "num_outputevents": fout_events(patient["num_outputevents"]),
        "num_procedureevents": fnum_procedure_events(patient["num_procedureevents"]), 
        "num_transfers": fnum_transfers(patient["num_transfers"]),
        "num_chartevents": fnum_charteve(patient["num_chartevents"]),
        "expired": fexpired(patient["expired"]),
        "admission_type_EMERGENCY": fadmtype(patient["admission_type"]),
        "count_diagnosis": fcount_diagno(patient["admission_diagnosis"]),
        'admission_diagnosis_hash_0':fadmission_diagno(patient["admission_diagnosis"],os.getcwd() + "/MIMIC Project/repo/hash_diagnosis.sav").iloc[0,0],
        'admission_diagnosis_hash_1':fadmission_diagno(patient["admission_diagnosis"],os.getcwd() + "/MIMIC Project/repo/hash_diagnosis.sav").iloc[0,1],
        'admission_diagnosis_hash_2':fadmission_diagno(patient["admission_diagnosis"],os.getcwd() + "/MIMIC Project/repo/hash_diagnosis.sav").iloc[0,2],
        'admission_diagnosis_hash_3':fadmission_diagno(patient["admission_diagnosis"],os.getcwd() + "/MIMIC Project/repo/hash_diagnosis.sav").iloc[0,3],
        'admission_diagnosis_hash_4':fadmission_diagno(patient["admission_diagnosis"],os.getcwd() + "/MIMIC Project/repo/hash_diagnosis.sav").iloc[0,4],
        'insurance_Medicare': finsurance_m(patient["insurance"]),
        'insurance_Private': finsurance_p(patient["insurance"]),
        'CATHOLIC': freligion_cath(patient["religion"]),
        'NOT AVAILIABLE RELIGION': freligion_nav(patient["religion"]),
        'OTHER RELIGION': freligion_or(patient["religion"]),
        'PROTESTANT QUAKER': freligion_pq(patient["religion"]),
        'marital_status_MARRIED': fmarital_m(patient["marital_status"]),
        'marital_status_SINGLE': fmarital_s(patient["marital_status"]),
        'CAUCASIAN': fethnicity_c(patient["ethnicity"]),
        'OTHER ETHNICITY': fethnicity_oe(patient["ethnicity"]), 
        'WHITE': fethnicity_w(patient["ethnicity"]),
        'admission_origin_Clinic referral/Premature': fao_Cr(patient["admission_origin"]),
        'admission_origin_EMERGENCY ROOM ADMISSION': fao_era(patient["admission_origin"]),
        'admission_origin_Physical referral/Normal deli': fao_pr(patient["admission_origin"])}

    ml_frame=pd.DataFrame.from_dict(new_patient,orient='index')
    ml_frame_final=ml_frame.T


    prediction= cat_model(scaling_data(ml_frame_final))

    return {"prediction":prediction}
