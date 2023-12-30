let courses = [
    {
        "name": "Course 1",
        "speaker": "Dr. Smith",
        "location": "Los Angeles",
        "date": "2023-03-21",
        "isNew": true
    },
    {
        "name": "Course 2",
        "speaker": "Prof. Johnson",
        "location": "Los Angeles",
        "date": "2023-08-26",
        "isNew": true
    },
    {
        "name": "Course 3",
        "speaker": "Dr. Brown",
        "location": "Chicago",
        "date": "2023-08-23",
        "isNew": true
    },
    {
        "name": "Course 4",
        "speaker": "Dr. Williams",
        "location": "New York",
        "date": "2023-11-03",
        "isNew": true
    },
    {
        "name": "Course 5",
        "speaker": "Prof. Davis",
        "location": "Houston",
        "date": "2023-11-05",
        "isNew": false
    },
    {
        "name": "Course 6",
        "speaker": "Prof. Davis",
        "location": "New York",
        "date": "2023-11-10",
        "isNew": true
    },
    {
        "name": "Course 7",
        "speaker": "Dr. Williams",
        "location": "New York",
        "date": "2023-09-22",
        "isNew": true
    },
]


export function Courses() {

    return (
        <div className={"courses"}>
            {courses.map((course) => (
                <div className={"course"}>

                    <div className={"courseHeader"}>
                        <span className={"courseName"}>{course.name}</span>
                        {course.isNew ? (
                            <span className={"new"}>New</span>
                        ) : (
                            <span className={"invisible"}>New</span>
                        )}

                    </div>

                    <span className={"law"}><b>Law {101 + courses.indexOf(course)}</b></span>
                    <p></p>

                    <span className={"text"}>Location: {course.location}</span>
                    <br></br>

                    <span className={"text"}>Date: {new Date(course.date).toLocaleDateString()}</span>

                    <p></p>
                    <button className={"button"} onClick={() => alert(`You have enrolled to ${course.name}`)}>
                        Enroll
                    </button>


                    <div className={"speaker"}>
                        <img src={"https://i1.sndcdn.com/avatars-LrV8voHTqB32jnW9-HzmABw-t240x240.jpg"}
                             alt={"stickman"}></img>
                        <span>{course.speaker}</span>
                    </div>


                </div>
            ))}
        </div>
    )
}

