import Joi from "joi";

const GenreOrStreamerSchema = Joi.object({
    name: Joi.string().required()
})

const MoviesSchema = Joi.object({
    title: Joi.string().required(),
    genre: Joi.number().required(),
    streamer: Joi.number().required(),
    status: Joi.boolean().required(),
    resume: Joi.string()
})