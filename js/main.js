
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
        active: "true",
        assignments: [
          {
            label: "Week 2 notes",
            url: "notes/notes.html?week=2",
          },
        ]
      },
      {
        week: "Week 3",
        active: "true",
        assignments: [
          {
            label: "Week 3 notes",
            url: "notes/notes.html?week=3",
          },
        ]
      },
      {
        week: "Week 4",
        active: "true",
        assignments: [
          {
            label: "Week 4 Code",
            url: "practice/week4/marvelQuiz.html",
          }
        ]
      },
      {
        week: "Week 5",
        active: "true",
        assignments: [
          {
            label: "Week 5 notes",
            url: "notes/notes.html?week=5",
          }
        ]
      },
      {
        week: "Week 6",
        active: "true",
        assignments: [
          {
            label: "Week 6 To Do Project",
            url: "toDo/index.html",
          }
        ]
      },
      {
        week: "Week 7",
        active: "true",
        assignments: [
          {
            label: "Week 7 Notes",
            url: "notes/notes.html?week=7",
          }
        ]
      },
      {
        week: "Week 8",
        active: "true",
        assignments: [
          {
            label: "Week 8 Notes",
            url: "notes/notes.html?week=8",
          }
        ]
      },
      {
        week: "Week 9",
        active: "true",
        assignments: [
          {
            label: "Week 9 Notes",
            url: "notes/notes.html?week=9",
          }
        ]
      },
      {
        week: "Week 10",
        active: "true",
        assignments: [
          {
            label: "Week 10 Notes",
            url: "notes/notes.html?week=10",
          }
        ]
      },
      {
        week: "Final Project",
        active: "true",
        assignments: [
          {
            label: "Final Project",
            url: "final/index.html",
          }
        ]
      }

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