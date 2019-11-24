import React, { Component } from 'react';
import Container from '../Container/Container';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import StoryListView from '../StoryListView/StoryListView';
import PostCreator from '../PostCreator/PostCreator';
import PostListView from '../PostListView/PostListView';

export default class AppContainer extends Component {
    render() {
        return (
            <Container>
                <Header>
                </Header>

                <Body>
                    <PostCreator></PostCreator>
                    <StoryListView></StoryListView>
                    <PostListView></PostListView>
                </Body>

                <Footer>
                </Footer>
            </Container>
        );
    }
}

// <StoryListView>
//     <Story data={loggedUser} add={true}></Story>
//     <Story data={loggedUser}></Story>
// </StoryListView>