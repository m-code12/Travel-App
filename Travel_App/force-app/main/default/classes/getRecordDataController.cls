public with sharing class getRecordDataController {
    @AuraEnabled(cacheable=true)
    public static List<Package__c> getAccounts() {
        return [Select Id, Name, Budget__c, end_date_availability__c, Holiday_Location__c,Image1__c,Image2__c,Image3__c from Package__c];
    }
}
