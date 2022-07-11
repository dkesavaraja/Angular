import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { AddUser, DeleteUser, GetUsers, UpdateUser } from "../actions/app.action";
import { UserutilityService } from "../userutility.service";



export class UserStateModel{
    users:any;
}

@State<UserStateModel>({

    name:'appstate',
    defaults:{
        users:[]
    }
})

@Injectable()
export class Appstate{
constructor(private ur:UserutilityService){}


@Selector()
static selectStateData(state:UserStateModel){
    return state.users;
}

@Action(GetUsers)
getDataFromState(con:StateContext<UserStateModel>)
{
    return this.ur.fetchUsers().pipe(tap(returnData=>{
        const state=con.getState();
        con.setState({

            ...state,
            users:returnData

        })
    }))
}

@Action(AddUser)
addDataToState(con:StateContext<UserStateModel>,{payload}:AddUser)
{
    return this.ur.addUser(payload).pipe(tap(returnData=>{
        const state=con.getState();
        con.patchState({
            users:[...state.users,returnData]
        })

    }))
}


@Action(UpdateUser)

updateDataOfState(con:StateContext<UserStateModel>,{payload, id , i}:UpdateUser)

{

    return this.ur.updateUser(payload,i).pipe(tap(returnData=>{

        const state=con.getState();
        const userList=[...state.users];
        userList[i]=payload;
        con.setState({

            ...state,
            users:userList

        })



    }))

}

@Action(DeleteUser)
deleteDataFromState(con:StateContext<UserStateModel>,{id}:DeleteUser)

{

    return this.ur.deleteUser(id).pipe(tap(returnData=>{

        const state=con.getState();
        const filteredArray=state.users.filter((contents: { id: number; })=>contents.id!==id)

        con.setState({

           ...state,
           users:filteredArray

        })



    }))

}


}