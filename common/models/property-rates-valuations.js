module.exports = function(Propertyratesvaluations) {

  var isStatic = true;
  Propertyratesvaluations.disableRemoteMethod('create', isStatic);
  Propertyratesvaluations.disableRemoteMethod('exists', isStatic);
  Propertyratesvaluations.disableRemoteMethod("upsert", isStatic);
  Propertyratesvaluations.disableRemoteMethod("updateAll", isStatic);
  Propertyratesvaluations.disableRemoteMethod("findById", isStatic);
  Propertyratesvaluations.disableRemoteMethod("findOne", isStatic);
  Propertyratesvaluations.disableRemoteMethod("findById", isStatic);
  Propertyratesvaluations.disableRemoteMethod("deleteById", isStatic);
  Propertyratesvaluations.disableRemoteMethod("prototype.updateAttributes", isStatic);
  Propertyratesvaluations.disableRemoteMethod("count", isStatic);
  Propertyratesvaluations.disableRemoteMethod("createChangeStream", isStatic);

};
