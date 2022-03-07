import esClient from './es-client';

const index = 'local_users';

const handleElasticsearchError = (error) => {
    if (error.status === 404) {
    throw new Error('User Not Found', 404);
    }
    throw new Error(error.msg, error.status || 500);
   };

   const getAll = () => esClient.search({
    index,
   }).then(response => response).catch((error) => {
    handleElasticsearchError(error);
   });
   const store = user => esClient.index({
    index,
    refresh: 'true',
    body: user,
   }).then(response => response.status).catch((error) => {
    handleElasticsearchError(error);
   });
   const getUser = firstName => esClient.search({
    index,
    body: {"query": {
    "match":{
    "firstName": {
    "query": firstName
    }
    }
    }
    },
   }).then(response =>  response ).catch((error) => {
    handleElasticsearchError(error);
   });
   
   const remove = firstName => esClient.deleteByQuery({
    index,
    refresh: 'true',
    body: {
    "query": {
    "match":{
    "firstName":{
    "query": firstName
    }
    }
    }
    },
   }).then(response => response).catch((error) => {
    handleElasticsearchError(error);
   });
   
   export default {
    getUser,
    getAll,
    store,
    remove,
   };