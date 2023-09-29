function validateUser(name: string,address: string ){
    if(!name || !address){
        return({
            status: false,
            message: 'name and address are requied'
        });
    }
    else{
        return({
            status: true
        });
    }
}

function validateName(name: String){
    if(!name){
        return({
            status: false,
            message: 'name is requied'
        });
    }
    else{
        return({
            status: true
        });
    }
}

function validateId(id: string){
    if(!id){
        return({
            status: false,
            message: 'id is requied'
        });
    }
    else{
        return({
            status: true
        });
    }
}

export default {validateUser, validateName, validateId};