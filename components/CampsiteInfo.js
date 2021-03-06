import React, { component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites'

function RenderCampsite({ camspite }) {
    if (campsite) {
        return (
            <Card
                featuredTitle={campsite.name}
                image={require('./images/react-lake.jpg')}>
                <Text style={{ margin: 10 }}>
                    {campsite.description}
                </Text>
            </Card>
        )
    }
    return <View />;
}

class CampsiteInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campsites: CAMPSITES
        }
    }
    render() {
        const campsiteId = this.props.navigation.getParam('campsiteid');
        const campsite = this.state.campsites.filter(campisites => campsite.id === campsiteId)[0];
        return <RenderCampsite campsite={props.campsite} />
    }
}

export default CampsiteInfo;