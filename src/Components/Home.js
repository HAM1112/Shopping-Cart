import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
  return (
    <div className='home'>
      <div className='home-content'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt commodo risus, sit amet imperdiet orci pellentesque malesuada. Etiam pulvinar, mi ac finibus eleifend, velit enim venenatis dui, sit amet condimentum lacus ligula ac turpis. Ut hendrerit posuere velit. Fusce quis ante diam. Nam sagittis massa eu dictum auctor. Aliquam rhoncus ex eget libero efficitur, sit amet fringilla libero imperdiet. Nulla hendrerit arcu nisi, ut tincidunt nulla suscipit non. Duis a posuere nisi. Nam mollis nisl id elit imperdiet egestas. Curabitur suscipit sapien in ornare malesuada. Fusce ultrices tincidunt ante, in blandit nisi scelerisque eget. Pellentesque sit amet enim ipsum. Maecenas pulvinar neque ut hendrerit consequat. Aliquam erat volutpat.
      </p>
      <p>
        Duis a risus in eros cursus iaculis non et ligula. Sed interdum eros enim, vel volutpat sem luctus at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus sapien nulla, euismod ac dui id, venenatis posuere metus. Duis sodales turpis nec cursus suscipit. Donec pellentesque semper aliquam. Duis nulla nunc, facilisis ac interdum in, viverra quis urna. Cras ultrices ligula sit amet dolor pellentesque, eu dapibus sem tempor.
      </p>
      <p>
        Vivamus mauris mauris, facilisis quis est ut, vestibulum faucibus magna. In nec dictum augue. Aenean imperdiet ut dui eget consequat. Integer pellentesque massa quam, vel feugiat lacus venenatis ac. Nunc id lacinia erat. Ut facilisis nibh risus, vel imperdiet neque fringilla aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris laoreet pellentesque justo, sed lobortis mi. Vestibulum ac ante nunc. Donec et venenatis diam.
      </p>
      <div className='shop-now'>
        <Link to={'/shop'}>
          <button>Shop Now</button>
        </Link>
      </div>
      </div>
    </div>
  )
}
export default Home;
