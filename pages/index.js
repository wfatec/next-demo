import Link from 'next/link'

const Post = props => (
    <div>
        <Link as={`/${props.slug}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </div>
) 

export default () => (
    <div>
        <h2>My bolg</h2>
        <ul>
            <li>
                <Post slug="first" title="first post" />
            </li>
            <li>
                <Post slug="second" title="second post" />
            </li>
            <li>
                <Post slug="third" title="third post" />
            </li>
        </ul>
    </div>
)