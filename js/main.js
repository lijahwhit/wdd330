
const links = [
    {
      week: "Week 1",
      active: "true",
      assignments: [
        {
          label: "Week 1 Notes",
          url: "notes/notes.html?week=1",
        },
        {
          label: "Week 1 Code",
          url: "practice/week1/story_editor.html",
        }
      ]
    },
    {
        week: "Week 2",
        active: "false",
        assignments: [
          {
            label: "Week 2 notes",
            url: "notes/notes.html?week=2",
          },
        ]
      },
      {
        week: "Week 3",
        active: "false",
        assignments: [
          {
            label: "Week 3 notes",
            url: "notes/notes.html?week=3",
          },
        ]
      },
      {
        week: "Week 4",
        active: "false",
        assignments: [
          {
            label: "Week 4 notes",
            url: "notes/weeks/week4.html",
          },
        ]
      },
      {
        week: "Week 5",
        active: "false",
        assignments: [
          {
            label: "Week 5 notes",
            url: "notes/weeks/week5.html",
          },
        ]
      },
      {
        week: "Week 6",
        active: "false",
        assignments: [
          {
            label: "Week 6 notes",
            url: "notes/weeks/week6.html",
          },
        ]
      },
      {
        week: "Week 7",
        active: "false",
        assignments: [
          {
            label: "Week 7 notes",
            url: "notes/weeks/week7.html",
          },
        ]
      },
      {
        week: "Week 8",
        active: "false",
        assignments: [
          {
            label: "Week 8 notes",
            url: "notes/weeks/week8.html",
          },
        ]
      },
      {
        week: "Week 9",
        active: "false",
        assignments: [
          {
            label: "Week 9 notes",
            url: "notes/weeks/week9.html",
          },
        ]
      },
      {
        week: "Week 10",
        active: "false",
        assignments: [
          {
            label: "Week 10 notes",
            url: "notes/weeks/week10.html",
          },
        ]
      },
      {
        week: "Week 11",
        active: "false",
        assignments: [
          {
            label: "Week 11 notes",
            url: "notes/weeks/week11.html",
          },
        ]
      },
      {
        week: "Week 12",
        active: "false",
        assignments: [
          {
            label: "Week 12 notes",
            url: "notes/weeks/week12.html",
          },
        ]
      },
      {
        week: "Week 13",
        active: "false",
        assignments: [
          {
            label: "Week 13 notes",
            url: "notes/weeks/week13.html",
          },
        ]
      },
      {
        week: "Week 14",
        active: "false",
        assignments: [
          {
            label: "Week 14 notes",
            url: "notes/weeks/week14.html",
          },
        ]
      },


  ]
  
  const populate_assignments_list = () => {
  
    const ol_assignment_list = document.querySelector(".assignment-list")
  
    const create_assignments = (link) => {
      htmlText_assignments = ""
          for(let assignment of link.assignments){
            htmlText_assignments += 
            ` <li active=${"false" && assignment.label!="upcoming assignment"}>
                <a href="${assignment.url}">
                  ${assignment.label}
                </a>
              </li>`
          }
      return htmlText_assignments
    }
  
    for(let link of links){
      li = `<li active=${link.active}>
              ${link.week}
              <ul>
              ${create_assignments(link)}
              </ul>
            </li>
      `
      ol_assignment_list.innerHTML += li
    }
  
  }
    
  
  document.onload = populate_assignments_list()