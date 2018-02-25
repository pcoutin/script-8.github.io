import React from 'react'
import PropTypes from 'prop-types'
import Output from './Output.js'
import NavBar from './NavBar.js'
import Title from './Title.js'
import Menu from './Menu.js'
import CodeEditor from './CodeEditor.js'
import Updater from './Updater.js'

const Editor = ({
  game,
  screen,
  setScreen,
  updateGame,
  token,
  setNextAction,
  clearNextAction,
  fetchToken,
  saveGist,
  gist,
  newGame,
  nextAction
}) => (
  <div className='Editor'>
    <Updater gist={gist} />
    <Title isFetching={gist.isFetching || token.isFetching} />
    <Menu
      game={game}
      gist={gist}
      nextAction={nextAction}
      saveGist={saveGist}
      token={token}
      fetchToken={fetchToken}
      clearNextAction={clearNextAction}
      setNextAction={setNextAction}
      newGame={newGame}
    />
    <NavBar screen={screen} setScreen={setScreen} />
    <CodeEditor game={game} updateGame={updateGame} />
    <Output game={game} />
  </div>
)

Editor.propTypes = {
  game: PropTypes.string,
  nextAction: PropTypes.string,
  gist: PropTypes.object.isRequired,
  screen: PropTypes.string.isRequired,
  token: PropTypes.object.isRequired,
  setScreen: PropTypes.func.isRequired,
  updateGame: PropTypes.func.isRequired,
  clearNextAction: PropTypes.func.isRequired,
  setNextAction: PropTypes.func.isRequired,
  saveGist: PropTypes.func.isRequired,
  fetchToken: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired
}

export default Editor
