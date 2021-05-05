# An API backup of user options for Farmbot OS.
class FbosConfig < ApplicationRecord
  class MissingSerial < StandardError; end

  belongs_to :device

  FIRMWARE_HARDWARE = [
    NOT_SET = nil,
    NONE = "none",
    ARDUINO = "arduino",
    FARMDUINO = "farmduino",
    FARMDUINO_K14 = "farmduino_k14",
    FARMDUINO_K15 = "farmduino_k15",
    FARMDUINO_K16 = "farmduino_k16",
    EXPRESS_K10 = "express_k10",
    EXPRESS_K11 = "express_k11",
  ]
end
