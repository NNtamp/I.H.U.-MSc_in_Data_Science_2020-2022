
import csv
import pandas as pd
import os
import pprint


def main():
    gender_stats=stats_gender() 
    age_stats=stats_age()
    hosp_stats=stats_hosp()
    rel_stats=stats_rel()
    eth_stats=stats_eth()
    ins_stats=stats_ins()
    hosp_gender_stats=stats_hosp_gender()
    print({"data": {"gender_stats":gender_stats,'age_stats':age_stats,'hosp_stats':hosp_stats,'rel_stats':rel_stats,'eth_stats':eth_stats,'ins_stats':ins_stats,'hosp_gender_stats':hosp_gender_stats}})
    return {"data": {"gender_stats":gender_stats,'age_stats':age_stats,'hosp_stats':hosp_stats,'rel_stats':rel_stats,'eth_stats':eth_stats,'ins_stats':ins_stats,'hosp_gender_stats':hosp_gender_stats}}


def stats_gender():
    new1=pd.read_csv(os.getcwd() + "/MIMIC Project/repo/data_for_stats.csv")
    stats_df=new1.groupby(['gender']).agg({"patient_id":['count']})
    stats_dict=stats_df.to_dict('index')
    gender_stats=[]
    for key,value in stats_dict.items():
        gender_stat={'gender':key,'percentage':0}
        gender_stat['percentage']=round((value[('patient_id','count')]/48976)*100.00,2)
        gender_stats.append(gender_stat)
    return gender_stats

def stats_hosp_gender():
    new1=pd.read_csv(os.getcwd() + "/MIMIC Project/repo/data_for_stats.csv")
    stats_df=new1.groupby(['hospitalization','gender']).agg({"patient_id":['count']})
    stats_dict=stats_df.to_dict('index')
    hosp_gender_stats=[]
    for key,value in stats_dict.items():
        hosp_gender_stat={'type':"-".join(key),'percentage':0}
        hosp_gender_stat['percentage']=round((value[('patient_id','count')]/48976)*100.00,2)
        hosp_gender_stats.append(hosp_gender_stat)
    return hosp_gender_stats

def stats_age():
    new1=pd.read_csv(os.getcwd() + "/MIMIC Project/repo/data_for_stats.csv")
    stats_df=new1.groupby(['age']).agg({"patient_id":['count']})
    stats_dict=stats_df.to_dict('index')
    age_stats=[]
    for key,value in stats_dict.items():
        age_stat={'age':key,'percentage':0}
        age_stat['percentage']=round((value[('patient_id','count')]/48976)*100.00,2)
        age_stats.append(age_stat)
    return age_stats

def stats_hosp():
    new1=pd.read_csv(os.getcwd() + "/MIMIC Project/repo/data_for_stats.csv")
    stats_df=new1.groupby(['hospitalization','age']).agg({"patient_id":['count']})
    stats_dict=stats_df.to_dict('index')
    hosp_stats=[]
    for key,value in stats_dict.items():
        hosp_stat={'type':"-".join(key),'percentage':0}
        hosp_stat['percentage']=round((value[('patient_id','count')]/48976)*100.00,2)
        hosp_stats.append(hosp_stat)
    return hosp_stats

def stats_rel():
    new1=pd.read_csv(os.getcwd() + "/MIMIC Project/repo/data_for_stats.csv")
    stats_df=new1.groupby(['religion']).agg({"patient_id":['count']})
    stats_dict=stats_df.to_dict('index')
    rel_stats=[]
    for key,value in stats_dict.items():
        rel_stat={'religion':key,'percentage':0}
        rel_stat['percentage']=round((value[('patient_id','count')]/48976)*100.00,2)
        rel_stats.append(rel_stat)
    return rel_stats

def stats_eth():
    new1=pd.read_csv(os.getcwd() + "/MIMIC Project/repo/data_for_stats.csv")
    stats_df=new1.groupby(['ethnicity']).agg({"patient_id":['count']})
    stats_dict=stats_df.to_dict('index')
    eth_stats=[]
    for key,value in stats_dict.items():
        eth_stat={'ethnicity':key,'percentage':0}
        eth_stat['percentage']=round((value[('patient_id','count')]/48976)*100.00,2)
        eth_stats.append(eth_stat)
    return eth_stats

def stats_ins():
    new1=pd.read_csv(os.getcwd() + "/MIMIC Project/repo/data_for_stats.csv")
    stats_df=new1.groupby(['insurance','hospitalization']).agg({"patient_id":['count']})
    stats_dict=stats_df.to_dict('index')
    ins_stats=[]
    for key,value in stats_dict.items():
        ins_stat={'type':"-".join(key),'percentage':0}
        ins_stat['percentage']=round((value[('patient_id','count')]/48976)*100.00,2)
        ins_stats.append(ins_stat)
    return ins_stats


if __name__ == "__main__":
    main()