import React, { useState } from 'react';
import './App.css';
import News from './Components/News';
import CenteredTabs from './Components/tab';
import Dashboard from './Components/dashboard';
import Profile from './Components/Profile';

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  // Fetch news articles when the component mounts
  useState(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b22166fc7d2e4ae3aa24844c312677d6';
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <CenteredTabs value={selectedTab} onChange={handleTabChange} />

      {selectedTab === 0 && (
        <div>
          <h1 align="center">News Today</h1>
          {articles.map(article => (
            <News key={article.title} article={article} />
          ))}
        </div>
      )}
      {selectedTab === 1 && <Dashboard />}
      {selectedTab === 2 && <Profile />}
    </div>
  );
}

export default App;
