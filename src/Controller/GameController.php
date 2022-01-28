<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/games")
 */
class GameController extends AbstractController
{
    /**
     * @Route("/", name="games")
     */
    public function index(): Response
    {
        return $this->render('game/index.html.twig', [
            'controller_name' => 'GameController',
        ]);
    }

    /**
     * @Route("/flying-bird", name="games")
     */
    public function flyingBird(): Response
    {
        return $this->render('game/flyingbird.html.twig', [
            'controller_name' => 'GameController',
        ]);
    }
}
