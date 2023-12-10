from pydantic import BaseModel
from typing import Optional, List
from model.paciente import Paciente
import json
import numpy as np

class PacienteSchema(BaseModel):
    """ Define como um novo paciente a ser inserido deve ser representado
    """
    name: str = "Maria"
    age: int = 50
    sex: bool = False
    cp: int = 3
    trestBPS: float = 130
    chol: float = 233
    fbs: bool = True
    restECG: int = 1
    thalach: float = 187
    exang: bool = True
    oldpeak: float = 3.5
    slope: int = 2
    ca: int = 1
    thal: int = 2

class PacienteViewSchema(BaseModel):
    """Define como um paciente será retornado
    """
    id: int = 1
    name: str = "Maria"
    age: int = 50
    sex: bool 
    cp: int 
    trestBPS: float
    chol: float
    fbs: bool
    restECG: int
    thalach: float
    exang: bool
    oldpeak: float
    slope: int
    ca: int
    thal: int
    outcome: bool
    
class PacienteBuscaSchema(BaseModel):
    """Define como deve ser a estrutura que representa a busca.
    Ela será feita com base no nome do paciente.
    """
    name: str = "Maria"

class ListaPacientesSchema(BaseModel):
    """Define como uma lista de pacientes será representada
    """
    pacientes: List[PacienteSchema]

    
class PacienteDelSchema(BaseModel):
    """Define como um paciente para deleção será representado
    """
    name: str = "Maria"
    
# Apresenta apenas os dados de um paciente    
def apresenta_paciente(paciente: Paciente):
    """ Retorna uma representação do paciente seguindo o schema definido em
        PacienteViewSchema.
    """
    return {
        "id": paciente.id,
        "name": paciente.name,
        "age": paciente.age,
        "sex": paciente.sex,
        "cp": paciente.cp,
        "trestBPS": paciente.trestBPS,
        "chol": paciente.chol,
        "fbs": paciente.fbs,
        "restECG": paciente.restECG,
        "thalach": paciente.thalach,
        "exang": paciente.exang,
        "oldpeak": paciente.oldpeak,
        "slope": paciente.slope,
        "ca": paciente.ca,
        "thal": paciente.thal,
        "outcome": paciente.outcome
    }
    
# Apresenta uma lista de pacientes
def apresenta_pacientes(pacientes: List[Paciente]):
    """ Retorna uma representação do paciente seguindo o schema definido em
        PacienteViewSchema.
    """
    result = []
    for paciente in pacientes:
        result.append({
            "id": paciente.id,
            "name": paciente.name,
            "age": paciente.age,
            "sex": paciente.sex,
            "cp": paciente.cp,
            "trestBPS": paciente.trestBPS,
            "chol": paciente.chol,
            "fbs": paciente.fbs,
            "restECG": paciente.restECG,
            "thalach": paciente.thalach,
            "exang": paciente.exang,
            "oldpeak": paciente.oldpeak,
            "slope": paciente.slope,
            "ca": paciente.ca,
            "thal": paciente.thal,
            "outcome": paciente.outcome
        })

    return {"pacientes": result}

