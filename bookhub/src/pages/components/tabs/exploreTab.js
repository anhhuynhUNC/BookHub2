import Explore_default from '../exploreTabContainer/explore_default'

export default function Explore(props) {
    return (

        <Explore_default cb={props.cb} data={props.default_data}></Explore_default>

    )

}