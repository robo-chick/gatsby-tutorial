import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
{
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`
const Header = () => {
    const {
        site: {
            info: {
                title,
                person: { name },
            },
        },
    } = useStaticQuery(getData);


    return (
        <div>
            {/* <h1>title: {data.site.info.title}</h1> 
           <h1>name: {data.site.info.person.name}</h1> */}

            <h1>title: {title}</h1>
            <h1>name: {name}</h1>
        </div>
    )
}

export default Header
