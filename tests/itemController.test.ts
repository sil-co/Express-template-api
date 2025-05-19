import { Request, Response } from "express"
import { getItems } from '../src/controllers/itemController';
import { items } from '../src/models/item';

describe('Item Controller', () => {
    it('Should return an empty array when no items exist', () => {
        // Create mock objects for Request, Response, and NextFunction
        const req = {} as Request;
        const res = {
            json: jest.fn(),
        } as unknown as Response;
    
        // Ensure that our in-memory store is empty
        items.length = 0;

        // Execute our controller function
        getItems(req, res, jest.fn());

        // Expect that res.json was called with an empty array
        expect(res.json).toHaveBeenCalledWith([]);
    });
});

// In this test:
// We create mock versions of the Express Request and Response objects
// We set the in-memory items array to an empty state
// We invoke the getItems controller and assert that it responds with an empty array
