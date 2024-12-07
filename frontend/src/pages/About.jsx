import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';


const subTitle = "Mon ambition";
const title = 'Become a Marchant';

const desc = 
    "Vous êtes la bienvenue sur mon site, nous vous proprosons differents types d'appartement et immeubles";

const btnText = "Apply Now";

const countList = [
    {
        iconName: "icofont-users-alt-4",
        count: "1200",
        title: "Voir plus de 2000 articles",
    },
    {
        iconName: "icofont-users-alt-4",
        count: "1200",
        title: "Voir plus de 2000 articles",
    },
    {
        iconName: "icofont-users-alt-4",
        count: "1200",
        title: "Voir plus de 2000 articles",
    }
]
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="section-wrapper">
            <div>
                <div className="col">
                    <h1>About</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
