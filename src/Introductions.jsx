import { useEffect, useState } from "react";
export default function Introductions() {
    const [introductions, setIntroductions] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students/?full=1")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok.")
                }
                return response.json();
            })
            .then((data) => setIntroductions(data))
            .catch((error) => setError(error.message));
    }, []);

    if (error) return <p>Error: {error}</p>;
    if (!introductions) return <p>Loading...</p>;

    return <>
        <ul id="student-introduction-list">
            {introductions.map((data, index) => (
                <li key={index}>
                    <h2>{data.name.first} {data.name.middleInitial ? `${data.name.middleInitial}` : ""} {data.name.last} {data.divider} {data.mascot}</h2>
                    <figure>
                        <img src={`https://dvonb.xyz${data.media.src}`} alt={`Picture of ${data.name.first} ${data.name.last}`} width={200}/>
                        <figcaption>{data.media.caption}</figcaption>
                    </figure>
                    <p>{data.personalStatement}</p>
                    <ul>
                        <li><b>Personal Background: </b>{data.backgrounds.personal}</li>
                        <li><b>Professional Background: </b>{data.backgrounds.professional}</li>
                        <li><b>Academic Background: </b>{data.backgrounds.academic}</li>
                        <li><b>Subject Background: </b>{data.backgrounds.subject}</li>
                        <li><b>Platform: </b>{data.platform.device}, {data.platform.os}</li>
                        <li><b>Courses I'm Taking, & Why: </b>
                            <ol>
                                {data.courses.map((course, cIndex) => (
                                    <li key={cIndex}>
                                        <b>{course.dept} {course.num} - {course.name}:</b> {course.reason}
                                    </li>
                                ))}
                            </ol>
                        </li>
                        <li><b>Funny/Interesting Item to Remember Me by: </b>{data.funFact}</li>
                        {data.additional ? <li><b>Additional Item: </b>{data.additional}</li> : null}
                    </ul>
                    <blockquote>{data.quote.text}</blockquote>
                    <cite>— {data.quote.author}</cite>
                    <nav>
                        <a href={data.links.charlotte}>CLT Web</a> 
                        {' | '}
                        <a href={data.links.github}>GitHub</a> 
                        {' | '}
                        <a href={data.links.githubio}>GitHub.io</a>
                        {' | '}
                        <a href={data.links.itis3135}>itis3135.io</a>
                        {' | '}
                        <a href={data.links.freecodecamp}>freeCodeCamp</a>
                        {' | '}
                        <a href={data.links.codecademy}>Codecademy</a>
                        {' | '}
                        <a href={data.links.linkedin}>LinkedIn</a>
                    </nav>
                </li>
            ))}
        </ul>
    </>
}