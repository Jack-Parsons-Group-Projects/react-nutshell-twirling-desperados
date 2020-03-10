import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import NewsList from "./news/NewsList";
import AddNewsForm from "./news/AddNewsForm";
import EditNewsForm from "./news/EditNewsForm";
import TaskList from "./tasks/TaskList";
import AddTaskForm from "./tasks/AddTaskForm";
import EditTaskForm from "./tasks/EditTaskForm";
import EventsList from "./events/EventList";
import AddEventForm from "./events/AddEventForm";
import EditEventForm from "./events/EditEventForm";
import MessagesList from "./messages/MessagesList";
import AddMessageForm from "./messages/AddMessageForm";
import EditMessageForm from "./messages/EditMessageForm";
import FriendsList from "./friends/FriendsList";
import AddFriendForm from "./friends/AddFriendForm";
import EditFriendForm from "./friends/EditFriendForm";

const ApplicationViews = props => {
    const currentUser = props.currentUser;
    const setAsUser = props.setAsUser;

    return (
        <React.Fragment>
            <Route path="/login" render={props => {
                return <Login setAsUser={setAsUser} {...props} />
            }} />
            <Route exact path="/tasks" render={props => {
                return <TaskList {...props} />
            }} />
            <Route path="tasks/addtask" render={props => {
                return <AddTaskForm {...props} />
            }} />
            <Route path="tasks/edittask" render={props => {
                return <EditTaskForm {...props} />
            }} />
            <Route exact path="/news" render={props => {
                if (currentUser) {
                    return <NewsList currentUser={currentUser} {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route path="/addnews" render={props => {
                if (currentUser) {
                    return <AddNewsForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route path="/:newsId(\d+)/editnews" render={props => {
                if (currentUser) {
                    return <EditNewsForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route
                exact
                path="/events"
                render={props => {
                    return <EventsList {...props} />;
                }}
            />
            <Route
                path="/events/new"
                render={props => {
                    return <AddEventForm {...props} />;
                }}
            />
            <Route
                path="/events/:eventId(\d+)/edit"
                render={props => {
                    return <EditEventForm {...props} />;
                }}
            />
            <Route exact path="/messages" render={props => {
                return <MessagesList {...props} />
            }} />
            <Route path="/addmessage" render={props => {
                return <AddMessageForm {...props} />
            }} />
            <Route path="/message/:messageId(\d+)/edit" render={props => {
                return <EditMessageForm {...props} />
            }} />
            <Route exact path="/friends" render={props => {
                return <FriendsList {...props} />
            }} />
            <Route path="/addfriend" render={props => {
                return <AddFriendForm {...props} />
            }} />
            <Route path="/editfriend" render={props => {
                return <EditFriendForm {...props} />
            }} />
        </React.Fragment>
    );
};

export default ApplicationViews;
