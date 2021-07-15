import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import './post-add-form.css';
import './post-list-item.css';
import './post-list.css';
import './post-status-filter.css';
import './search-panel.css';

import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 700px;
`

const App = () => {

  const data = [
    {label: 'Going to learn React', important: true, id: "vlkfdgjh"}, 
    {label: 'That is so good', important: false, id: "ertvbfd"},
    {label: 'I need a brake...', important: false, id: "sdfobkjfd"},
  ];

  return (
    <AppBlock>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts = {data} />
      <PostAddForm />
    </AppBlock>
  );
};

export default App;
