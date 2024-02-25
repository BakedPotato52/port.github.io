import React from 'react'
import './feed.css'

function Feed() {
  return (
    <main className='feed'>
      <div className="feed_item">
        <a href="https://youtu.be/fhNRFbo1J6M?si=xBhrhHQy3x1lgJ9w">
          <div className="">
            <img src="tham1.jpg" alt=""/>
          </div>
        </a>
			<div className="feed_item_info">
                <div className="">
                    <img className="feed_item_info_avatar" alt=""  src="logo.jpg"/> 
                    </div>
                <div>
                    <h3>
                         <a href="https://youtu.be/fhNRFbo1J6M?si=xBhrhHQy3x1lgJ9w"> Mobile Best Coding App <br/> HTML CSS JAVASCRIPT |</a>
                    </h3>
                    <a href="https://youtu.be/fhNRFbo1J6M?si=xBhrhHQy3x1lgJ9w">Kanak Acharya</a>
                    <p> 2M Views &middot; 18 Jul 2021</p>
                </div>
            </div>
        </div>

        <div className="feed_item">
		  <a href="https://youtu.be/fhNRFbo1J6M?si=xBhrhHQy3x1lgJ9w">
            <div class=""><img src="tham1.jpg" alt=''/></div>
            </a>
			<div className="feed_item_info">
                <div className=""><img className="feed_item_info_avatar" alt=""  src="logo.jpg"/> </div>
                <div>
                    <h3>
                         <a href="https://youtu.be/fhNRFbo1J6M?si=xBhrhHQy3x1lgJ9w"> Mobile Best Coding App <br/> HTML CSS JAVASCRIPT |</a>
                    </h3>
                    <a href="https://youtu.be/fhNRFbo1J6M?si=xBhrhHQy3x1lgJ9w">Kanak Acharya</a>
                    <p> 2M Views &middot; 18 Jul 2021</p>
                </div>
            </div>
        </div>
        <div className="feed_item">
		  <a href="https://youtu.be/ifQvdcHSmlA?si=dxE6sVRvtuTvcUA_">
            <div className=""><img src="tham2.jpg" alt=''/></div>
            </a>
			<div className="feed_item_info">
                <div className=""><img className="feed_item_info_avatar" alt=""  src="logo.jpg"/> </div>
                <div>
                    <h3>
                      <a href="https://youtu.be/ifQvdcHSmlA?si=dxE6sVRvtuTvcUA_">  Best Secret For Pro Coder|<br/> Best Tips WebDeveloper |</a>
                    </h3>
                    <a href="https://youtu.be/ifQvdcHSmlA?si=dxE6sVRvtuTvcUA_">Kanak Acharya</a>
                    <p> 30K Views &middot; 08 Aug 2021</p>
                </div>
            </div>
        </div>

      </main>
  )
}

export default Feed
