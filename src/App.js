import React, {
    Component
} from "react";
import CharacterCards from "./components/CharacterCards";
import Wrapper from "./components/Wrapper";
import ScoreCard from "./components/ScoreCard";
import princesses from "./cards.json";
import "./App.css";

class App extends Component {
    // Setting this.state.princesses to the cards json array
    state = {
        princesses,
        clickedPrincessIds: [],
        score: 0,
        goal: 8,
        status: ""
    };

    //shuffle the princess cards in the browser when clicked
    shuffleScoreCard = id => {
        let clickedPrincessIds = this.state.clickedPrincessIds;

        if (clickedPrincessIds.includes(id)) {
            this.setState({
                clickedPrincessIdss: [],
                score: 0,
                status: "You Lost! Click to play again."
            });
            return;
        } else {
            clickedPrincessIds.push(id)

            if (clickedPrincessIds.length === 8) {
                this.setState({
                    score: 8,
                    status: "You Won! Click to play again.",
                    clickedPrincessIds: []
                });
                console.log('You Win');
                return;
            }

            this.setState({
                princesses,
                clickedPrincessIds,
                score: clickedPrincessIds.length,
                status: " "
            });

            for (let i = princesses.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [princesses[i], princesses[j]] = [princesses[j], princesses[i]];
            }
        }
    }

    render() {
        return ( 
            <div className = "App" >
            <header className = "App-header" >
                <h1 className = "App-title" > Clicky-Game < /h1> 
                <p className = "App-intro" >Don't click the same image twice!< /p > 
            </header> 
            <ScoreCard total = {
                this.state.score
            }
            goal = {
                8
            } 
            status = {
                this.state.status
            }
            /> 
            < Wrapper > {
                this.state.princesses.map(princess => ( <
                    CharacterCards shuffleScoreCard = {
                        this.shuffleScoreCard
                    }
                    id = {
                        princess.id
                    }
                    key = {
                        princess.id
                    }
                    image = {
                        princess.image
                    }
                    />
                ))
            }
            </Wrapper> 
            < /div >
        );
    }
}

export default App;