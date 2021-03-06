/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from "react";
import { render } from "react-dom";
import { Client } from "boardgame.io/react";
import TicTacToe from "./Game";
import Board from "./Board";

const App = Client({
  game: TicTacToe,
  board: Board,
  debug: true
});



render(<App />, document.getElementById("root"));
