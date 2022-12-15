import React from 'react';
import AuthStack from '../routes/AuthStack';
import DashboardStack from '../routes/DashboardStack';

const Dashboard = () => {
    return (
        // isAuthenticated?<DashboardStack/>:<AuthStack/>
        false?<DashboardStack/>:<AuthStack/>
    );
}

// const mapStateToProps=state=>({
//   isAuthenticated:state.auth.isAuthenticated,
//   });
  
// export default connect(mapStateToProps, { } )(Dashboard);
export default Dashboard;