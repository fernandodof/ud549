describe('AddressBook', function functionName() {
    var addressBook;
    var thisContact;

    beforeEach(function() {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add a contact', function() {
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function() {
        addressBook.addContact(thisContact);

        addressBook.delteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
})
