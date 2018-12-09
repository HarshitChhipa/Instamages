import React from 'react';
import {Button} from "react-bootstrap";

export default class ProfileHeader extends React.Component {

    render() {
        return (
            <div className="row user-header p-y-2">
                <div className="col-md-offset-2 col-md-8 p-y-4">
                    <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img
                                    className="media-object"
                                    src="https://process.filestackapi.com/crop_faces=mode:fill/rounded_corners=radius:max/sb5RRdoQiiy5l5JUglB1"
                                    alt="profile-pic"
                                />
                            </a>
                        </div>
                        <div className="media-body p-l-6">
                            <h2 className="media-heading m-t-15">Harshit <b></b>
                                <Button bsStyle="primary">Follow</Button>
                            </h2>
                            <h4><strong>Harsh</strong> Simply An Engineer</h4>
                            <ul className="header-ul">
                                <li><strong>50</strong> posts</li>
                                <li><strong>300k</strong> followers</li>
                                <li><strong>180</strong> following</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
