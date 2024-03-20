'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

export const useGetTeam = () => {
  const [team, setTeam] = useState(null)

  const roles = [
      {
          title: "CEO",
          expertise: "Strategic Leadership, Business Development, Stakeholder Relationship Management",
          description: "Providing strategic direction and overseeing all operations. Responsibilities include setting goals, developing business strategies, managing finances, and fostering stakeholder relationships."
      },
      {
          title: "COO",
          expertise: "Operations Management, Resource Allocation",
          description: "Manages day-to-day operations to ensure efficiency and effectiveness in resources allocation, performance monitoring, and solving operational challenges to drive the company's success."
      },
      {
          title: "CFO",
          expertise: "Financial Planning and Analysis, Risk Management, Tax Planning",
          description: "Oversees financial planning and analysis including compliance to financial regulation. Gives strategic financial guidance to the executive team and play a key role in decision-making processes."
      },
      {
          title: "Marketing Director",
          expertise: "Brand Management, Market Research and Analysis, Customer Relationship Management",
          description: "Leads marketing efforts to enhance brand visibility and drive sales. Responsibilities include developing marketing strategies, conducting market research, overseeing campaign development, and managing digital marketing and public relations initiatives."
      },
      {
          title: "Creative Director",
          expertise: "Creative Strategy, Branding, Project Management",
          description: "Leads creative endeavors, ensuring brand consistency and visual appeal. Responsibilities include developing creative strategies, overseeing design projects, maintaining brand identity, fostering innovation, and collaborating with cross-functional teams."
      },
      {
          title: "Head Chef",
          expertise: "Menu Development, Kitchen Management, Quality Control",
          description: "Oversees culinary operations to deliver exceptional dining experiences. Responsibilities include menu development, kitchen management, quality control, fostering creativity, and leading the culinary team to maintain the company's reputation for excellence."
      }
  ]

  const onFetchTeam = async() => {
    try {
      let res = await fetch('https://randomuser.me/api/?results=6&seed=abc',{
        method: 'get',
        cache: 'no-store'
      })
      res = await res.json() 

      console.log(res)
      for(let i = 0; i < 6; i++) {
        res.results[i].role = roles[i]
        console.log(res.results[i])
      }
      // setTeam(res.results)
      console.log(team)
      return res
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onFetchTeam()
  },[])

  const showTeam = (teamCol) => {
    teamCol.map((x,i) =>{
      return(
        <div key={i}>
          {x.email}
          <Image
          src={x.picture?.large}
          height={200}
          width={200}
          alt="user"
          quality={100}/>
        </div>
      )
    })
  }

  return {
    // team,
    onFetchTeam,
    showTeam
  }
}
