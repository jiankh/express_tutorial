const Author = require("../models/author")
const asyncHandler = require("express-async-handler")

//Displays list of authors
exports.author_list = asyncHandler(async (req,res,next) => {
    res.send("NOT IMPLEMENTED: AUTHOR list")
})

// Display detail page for a specific author
exports.author_detail = asyncHandler(async (req,res,next) => {
    res.send(`NOT IMPLEMENTED: Author Details: ${req.params.id}`)
})

//Display Author created form on GET
exports.author_create_get = asyncHandler(async (req,res,next) => {
    res.send("Not Implemented: Author create GET")
})

//Handle Author create on Post
exports.author_create_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Autor create POST")
})

//Handle Author delete form on GET
exports.author_delete_get = asyncHandler(async (req,res,next) => {
    res.send("NOT IMPLEMENTED: Author delete GET")
})

//Handle author delete on Post
exports.author_delete_post = asyncHandler(async (req,res,next) => {
    res.send("Not implemented: Author delete Post")
})

//Display Author update form on GET
exports.author_update_get = asyncHandler(async (req,res,next) => {
    res.send("Not implemented: Author update GET")
} )

// Handle Author update on POST.
exports.author_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update POST")
  })