class DeviceModel {
    constructor(name, os, status, is_reserved, extra) {
        this.name = name;
        this.os = os;
        this.status = status;
        this.is_reserved = is_reserved;
        this.extra = extra;
    }
}

module.exports = DeviceModel;