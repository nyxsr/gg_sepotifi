const withError = (res, code, message) =>{
    return res.status(code).json({
        meta:{
            code:code,
            message:message
        },
        data:[]
    })
}

module.exports = withError