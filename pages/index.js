import { useEffect, useState } from 'react';
import { Instagram } from 'react-content-loader';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout'
import { fetchHomepageBlogs } from '../redux/resource/actions/api';
import { Card } from 'antd';

export default function Page() {
  const [] = useState([]);
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blog)


  useEffect(() => {
    dispatch(fetchHomepageBlogs());
  }, []);
  if (blogs.loading) {
    return <Instagram />
  } else
    return (
      <Layout>
        <div className="grid-container" style={{ display: 'inline-grid', color: 'red', padding: '50px', margin: '20px' }}>
          {blogs.countries.map(item => {
            return <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <a href="#">
                  <h5 className="">{item.title}</h5>
                </a>
                <p className="">{item.title+item.title+item.title}</p>
            </Card>
          })}
        </div>
      </Layout>
    );
}