from sqlalchemy import Column, String, Integer, DateTime, Float, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from typing import Union

from  model import Base

# colunas = Pregnancies,Glucose,BloodPressure,SkinThickness,test,BMI,DiabetesPedigreeFunction,Age,Outcome

class Paciente(Base):
    __tablename__ = 'pacientes'
    
    id = Column(Integer, primary_key=True)
    name= Column("Name", String(50))
    age = Column("Age", Integer)
    sex = Column("Sex", Boolean)
    cp = Column("Cp", Integer)
    trestBPS = Column("TrestBPS", Float)
    chol = Column("Chol", Float)
    fbs = Column("Fbs", Boolean)
    restECG = Column("RestECG", Integer)
    thalach = Column("Thalach", Float)
    exang = Column("Exang", Boolean)
    oldpeak = Column("Oldpeak", Float)
    slope = Column("Slope", Integer)
    ca = Column("ca", Integer)
    thal = Column("Thal", Integer)
    outcome = Column("Diagnostic", Boolean, nullable=True)
    data_insercao = Column(DateTime, default=datetime.now())
    
    def __init__(self, 
                 name: str,
                 sex: bool, 
                 age: int, 
                 cp: int, 
                 trestBPS: float,
                 chol: float, 
                 fbs: bool, 
                 restECG: int, 
                 thalach: float,
                 exang: bool, 
                 oldpeak: float, 
                 slope: int,
                 ca: int,
                 thal: int, 
                 outcome: bool,
                 data_insercao:Union[DateTime, None] = None):
        """
        Cria um Paciente

        Arguments:
            name: str = "Maria"
         
            age: int = "Age (in years)"
         
            sex: bool = "gender (1 = male; 0 = female)"
    
            chestPain: int = "Chest Pain type -- 1: typical angina (all criteria present) -- 2: atypical angina (two of three criteria satisfied) -- 3: non-anginal pain (less than one criteria satisfied) -- 4: asymptomatic (none of the criteria are satisfied)" 
    
            restbps: float = "Resting Blood pressure (in mmHg, upon admission to the hospital)"
            
            chol: float = "serum cholesterol in mg/dL"
         
            fbs: bool = "fasting blood sugar > 120 mg/dL (likely to be diabetic) 1 = true; 0 = false" 
            
            trestECG: int = "Resting electrocardiogram results -- Value 0: normal -- Value 1: having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV) -- Value 2: showing probable or definite left ventricular hypertrophy by Estes' criteria
            
            thalach: float = "Greatest number of beats per minute your heart can possibly reach during all-out strenuous exercise. 
            
            exang: bool = "Exercise induced angina (1 = yes; 0 = no)
            
            oldpeak: float = "ST depression induced by exercise relative to rest (in mm, achieved by subtracting the lowest ST segment points during exercise and rest)
                        
            slope: int = "the slope of the peak exercise ST segment, ST-T abnormalities are considered to be a crucial indicator for identifying presence of ischaemia -- Value 1: upsloping -- Value 2: flat -- Value 3: downsloping
            
            ca: int = "number of major vessels (0-3) colored by fluoroscopy. Major cardial vessels are as goes: aorta, superior vena cava, inferior vena cava, pulmonary artery (oxygen-poor blood --> lungs), pulmonary veins (oxygen-rich blood --> heart), and coronary arteries (supplies blood to heart tissue).
            
            thal: int = "0 = normal; 1 = fixed defect (heart tissue can't absorb thallium both under stress and in rest); 2 = reversible defect (heart tissue is unable to absorb thallium only under the exercise portion of the test)
            
            outcome: bool = "0 - No disease, 1 = Disease
        """
        self.name= name
        self.age = age
        self.sex = sex 
        self.cp = cp 
        self.trestBPS = trestBPS
        self.chol = chol 
        self.fbs = fbs 
        self.restECG = restECG 
        self.thalach = thalach
        self.exang = exang
        self.oldpeak = oldpeak 
        self.slope = slope
        self.ca = ca
        self.thal = thal
        self.outcome = outcome
        
        # se não for informada, será o data exata da inserção no banco
        if data_insercao:
            self.data_insercao = data_insercao
            
