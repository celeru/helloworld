'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Movie Schema
 */
var MovieSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Movie name',
		trim: true
	},
	prize: {
		type: String,
		default: '0.0',
		required: 'Please enter movie value'

	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Movie', MovieSchema);