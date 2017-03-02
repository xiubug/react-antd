import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import pureRender from 'pure-render-decorator';
import { is, fromJS } from 'immutable';
import { Tool } from '../../config/tool';

import template from './template';
import auth from './auth';

export {template, auth};