import React from 'react'

const ProfilePosts = () => {
    return (
        <div className="w-full flex mt-8 space-x-4">
            {/* left */}
            <div className="w-[35%] height-[200px] flex justify-center items-center">
                <img src="https://imageio.forbes.com/blogs-images/bernardmarr/files/2018/07/AdobeStock_157266517-1200x640.jpeg?format=jpg&width=1200" alt="" className="h-full w-full object-cover" />
            </div>

            {/* right */}
            <div className="flex flex-col w-[65%]">
                <h1 className="text-xl font-bold mb-1 md:mb-2 md:text-2xl">
                    AI can improve the healthcare user experience
                </h1>
                <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
                    <p>@ankushmallick</p>
                    <div className="flex space-x-2">
                        <p>14/9/2023</p>
                        <p>18:37</p>
                    </div>
                </div>
                <p className="text-sm md:text-lg">AI technologies like natural language processing (NLP), predictive analytics and speech recognition can lead to healthcare providers having more effective communication with patients, which can lead to better patient experience, care and outcomes.</p>
            </div>

        </div>
    )
}

export default ProfilePosts