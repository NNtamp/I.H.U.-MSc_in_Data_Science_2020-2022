import pickle
import os
import catboost

def scaling_data(input):
    filename=os.getcwd() + "/MIMIC Project/repo/scale_model.sav"
    loaded_scale=pickle.load(open(filename,'rb'))
    result = loaded_scale.transform(input)
    return result




def cat_model(input):
    filename=os.getcwd() + "/MIMIC Project/repo/cat_model.sav"
    loaded_cat = pickle.load(open(filename, 'rb'))
    result = loaded_cat.predict(input)
    if result==0:
        return 'Day'
    elif result==1:
        return 'Week'
    elif result==2:
        return 'TwoWeeks'
    elif result==3:
        return 'Month'
    elif result==4:
        return 'More'
    else:
        return "Shit"


