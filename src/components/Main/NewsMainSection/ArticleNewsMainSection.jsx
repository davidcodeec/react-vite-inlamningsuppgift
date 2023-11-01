import React, { useState, useEffect } from 'react';
import ArticleNewsMainSectionBox from '../../Generics/MainGenerics/ArticleNewsMainSectionBox';
import './ArticleNewsMainSection.css'
import { Link } from 'react-router-dom';




const ArticleNewsMainSection = () => {
  const [articles, setArticles] = useState([]);

  
  const fetchArticles = async () => {
    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
  
    
  
 
      const articlesWithValidImages = data.map((article) => {
        const img = new Image();
        img.src = article.imageUrl;
        img.onerror = () => {
          article.imageUrl = 'URL of placeholder image';
        
        };
        return article;
      });
      
      setArticles(articlesWithValidImages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <section className="article-news-section">
      <div className="container">
        <div className="section-title">
          <h2>Our News & Articles</h2>
        </div>

        <div className="image-spacing">
        {articles.map((article) => (
          <Link to={`/news/${article.id}`} key={article.id}>
            <ArticleNewsMainSectionBox
              day={article.day}
              month={article.month}
              src={article.imageUrl}
              title={article.title}
              category={article.category}
              content={article.content}
            />
          </Link>
        ))}

            </div>

        {/* Navigation buttons */}
        <div className="number-boxes">
          <i className="fa-solid fa-chevron-left"></i>
          <div className="active boxes">1</div>
          <div className="boxes">2</div>
          <div className="boxes">3</div>
          <div className="boxes">_</div>
          <div className="boxes">9</div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default ArticleNewsMainSection;
