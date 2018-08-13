import React, { Component } from 'react';
import Stat, { StatsWrapper } from '../UI/Stat';
import Box from '../UI/Box';
import { dashboardRoutes } from '../Pages/Bookings/DashboardRoutes';
import { Route, Switch } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="content-inner no-padding-top no-padding-left no-padding-right">
                <Box classes="border-bottom side-margins no-vertical-distance">
                    <StatsWrapper>
                        <Stat title="NEW BOOKINGS" subtitle="Avg. $458.77" value="$5,256" label="+24%" labelClass="raising" path='/dashboard/newBookings' />
                        <Stat title="CURRENT BOOKINGS" subtitle="Avg. 351 per wekk" value="5269" label="-12%" labelClass="descreasing" path='/dashboard/currentBookings' />
                        <Stat title="PAYMENT PENDING" subtitle="Total: 5987" value="+589" label="+6%" labelClass="raising" path='/dashboard/paymentPending' />
                        <Stat title="COMPLETED BOOKINGS" subtitle="Last 1 month ago" value="98.75%" label="Good" path='/dashboard/completedBookings' />
                        <Stat title="CANCELLED BOOKINGS" subtitle="Last 1 month ago" value="98.75%" label="Good" path='/dashboard/cancelledBookings' />
                    </StatsWrapper>
                </Box>

                <Switch>
                    {dashboardRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} component={route.component} exact={route.exact} />
                    })}
                </Switch>
            </div>
        );
    }
}