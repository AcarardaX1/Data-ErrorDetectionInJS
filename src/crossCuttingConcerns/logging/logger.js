export class BaseLogger{

    log(data){
        console.log("Default logger: " + data)
    }
}

export class ElasticBaseLogger extends BaseLogger{

    log(data){
        console.log("Logged to Elastic" + data)

    }

}

export class MongoLogger extends BaseLogger{

    log(data){
        console.log("Logged to Mongo" + data)

    }

} 