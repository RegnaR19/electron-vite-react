import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state: any) => {
   return {
      users: state.usersPage.usersList,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount
   }
}

let mapDispatchToProps = (dispatch: any) => {
   return {
      follow: (userID: any) => {
         dispatch(followAC(userID))
      },
      unfollow: (userID: any) => {
         dispatch(unfollowAC(userID))
      },
      setUsers: (usersList: any) => {
         dispatch(setUsersAC(usersList))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;