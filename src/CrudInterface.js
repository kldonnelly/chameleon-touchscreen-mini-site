var required = function () { throw new Error("Implement!"); };

var CrudInterface = {
   
    init:required,
    signIn:required,
    signOut:required,
    Create: required,
    Read: required,
    ReadAll: required,
    Update: required,
    Delete: required,
};

function Crud() {

}

Crud.prototype = Object.create(CrudInterface); // inherit

export {  Crud };