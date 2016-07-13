module.exports = function(Ratesinstalmentduedates) {

  var isStatic = true;
  Ratesinstalmentduedates.disableRemoteMethod('create', isStatic);
  Ratesinstalmentduedates.disableRemoteMethod('exists', isStatic);
  Ratesinstalmentduedates.disableRemoteMethod("upsert", isStatic);
  Ratesinstalmentduedates.disableRemoteMethod("updateAll", isStatic);
  Ratesinstalmentduedates.disableRemoteMethod("findById", isStatic);
  Ratesinstalmentduedates.disableRemoteMethod("findOne", isStatic);
  Ratesinstalmentduedates.disableRemoteMethod("findById", isStatic);
  Ratesinstalmentduedates.disableRemoteMethod("deleteById", isStatic);
  Ratesinstalmentduedates.disableRemoteMethod("prototype.updateAttributes", isStatic);
  Ratesinstalmentduedates.disableRemoteMethod("count", isStatic);
  Ratesinstalmentduedates.disableRemoteMethod("createChangeStream", isStatic);

};
