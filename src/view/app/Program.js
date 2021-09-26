import React from 'react'
import './App.css';
import Header from '../../components/header/Header'
import TodoList from '../../components/todo/TodoList'
import LeftBar from '../../components/leftSidebar/LeftSidebar'
import RightBar from '../../components/rightSidebar/RightSidebar';

function Program() {
    return (
        <div>
            <div className="appContainer">
                <Header/>
                <div className="appBody">
                <LeftBar />
                <TodoList />
                <RightBar />
                </div>
            </div>
        </div>
    )
}

export default Program
