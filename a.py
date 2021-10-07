    # def stringToBase64(string):
    #     return (base64.b64encode(bytes(string, 'utf-8'))).decode('utf-8')
    #

    # class DialerRecord:
    #     def __init__(self, campaign, telefono, celular, dealid):
    #         self.campaign = campaign
    #         self.telefono = telefono
    #         self.celular = celular
    #         self.dealid = dealid
    #
    #     def buildDialerRecord(self):
    #         return '{};{};dealid={};;9999\n'.format(self.campaign,
    #                                                 self.telefono, self.dealid)

    # class DialerList:
    #     def __init__(self, campaign):
    #         self.dialerlist = []
    #         self.campaign = campaign
    #
    #     def addDialerRecordToList(self, dialerrecord):
    #         self.dialerlist.append(dialerrecord)

    #     def getDialerListRecordBase64(self):
    #         dialerListBase64 = ""
    #         for dialerrecord in self.dialerlist:
    #             dialerListBase64 += dialerrecord.buildDialerRecord()
    #         return stringToBase64(dialerListBase64)
    #
    #     def uploadDialerListToUC(self, token):
