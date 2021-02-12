import React from 'react';
import ProgressBar from 'react-animated-progress-bar'

export default function GqlComp(){
    return(
        <div className="font-normal pt-2 text-sm text-left text-gray-100">
            <div>
                <label className="text-lg font-bold text-gray-200">Mutation:</label>
                <ProgressBar
                    width="100%"
                    height="10px"
                    rect
                    fontColor="white"
                    percentage="85"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                />
            </div>
            <div>
                <label className="text-lg font-bold text-gray-200">Query:</label>
                <ProgressBar
                    paddingTop="-20px"
                    width="100%"
                    height="10px"
                    rect
                    fontColor="white"
                    percentage="90"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                />
            </div>
            
        </div>
    )
}