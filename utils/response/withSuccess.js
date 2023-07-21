const withSuccess = (res, code, message, data) =>{
    return res.status(code).json({
        meta:{
            code:code,
            message:message
        },
        data:data
    })
}

module.exports = withSuccess